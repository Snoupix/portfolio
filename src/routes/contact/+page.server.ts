import { TWITTER_TOKEN, GITHUB_TOKEN } from '$env/static/private';
import type { SocialMetric } from '$src/types/Socials';
import config from '$src/helpers/config';

export const prerender = true;

export const _getRedditInfo = async (username: string) => {
  const redditEndpoint = `https://api.reddit.com/user/${username}/about`;
  return await fetch(redditEndpoint)
    .then((res) => res.json())
    .then((stats) => {
      if (stats.data && stats.data.link_karma) {
        const { total_karma, created_utc } = stats.data;
        const metrics: SocialMetric[] = [
          { label: 'Karma', value: total_karma.toLocaleString() },
          {
            label: 'Joined',
            value: new Date(created_utc * 1000).getFullYear(),
          },
        ];
        return metrics;
      }
      return [];
    })
    .catch(() => []);
};

export const _getGithubInfo = async (username: string) => {
  const githubEndpoint = `https://api.github.com/users/${username}`;
  const githubRequest = {
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
  };
  return await fetch(githubEndpoint, githubRequest)
    .then((res) => res.json())
    .then((stats) => {
      if (stats.public_repos) {
        const { public_repos, followers } = stats;
        const metrics: SocialMetric[] = [
          { label: 'Repos', value: public_repos.toLocaleString() },
          { label: 'Followers', value: followers.toLocaleString() },
        ];
        return metrics;
      }
      return [];
    })
    .catch(() => []);
};

export const _getDevToInfo = async (username: string) => {
  const devToEndpoint = `https://dev.to/api/users/by_username?url=${username.toLocaleLowerCase()}`;
  return await fetch(devToEndpoint)
    .then((res) => res.json())
    .then((stats) => {
      const metrics: SocialMetric[] = [
        { label: 'Joined', value: new Date(stats.joined_at).getFullYear() },
      ];
      return metrics;
    })
    .catch(() => []);
};

export const _getMastodonInfo = async (username: string) => {
  const mastodonEndpoint = `https://mastodon.social/api/v1/accounts/001032965`;
  return await fetch(mastodonEndpoint)
    .then((res) => res.json())
    .then((stats) => {
      if (stats) {
        const { followers_count, created_at } = stats;
        const metrics: SocialMetric[] = [
          { label: 'Followers', value: followers_count.toLocaleString() },
          { label: 'Joined', value: new Date(created_at).getFullYear() },
        ];
        return metrics;
      }
      return [];
    })
    .catch(() => []);
};

export const load = async () => {
  const {
    // Get usernames from config
    Reddit: redditUn,
    GitHub: githubUn,
    'Dev.to': devtoUn,
    Mastodon: mastodonUn,
  } = config.contact.socials;
  // Trigger fetch stats for each social
  const [
    reddit,
    github,
    devto,
    mastodon,
  ] = await Promise.all([
    _getRedditInfo(redditUn),
    _getGithubInfo(githubUn),
    _getDevToInfo(devtoUn),
    _getMastodonInfo(mastodonUn),
  ]);
  return {
    props: {
      reddit,
      github,
      devto,
      mastodon,
    },
  };
};
