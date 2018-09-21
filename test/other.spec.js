import { isUrl, parseUrl } from '../src/other'

describe('other', () => {
  it('isUrl use to check the type of url', () => {
    expect(isUrl('www.cnblogs.com')).toBe(false)
    expect(isUrl('https://www.cnblogs.com/?a=12&b=hl&c=243')).toBe(true)
    expect(isUrl('https://124.4.4.4/?a=12&b=hl&c=243')).toBe(true)
  })
  it('parseUrl use to check the type of url', () => {
    expect(
      parseUrl(
        'https://play.grafana.org:80/d/000000012/grafana-play-home?orgId=1#aa/bb'
      )
    ).toEqual({
      filename: 'grafana-play-home',
      hash: 'aa/bb',
      host: 'play.grafana.org',
      params: { orgId: 1 },
      path: '/d/000000012/grafana-play-home',
      port: '80',
      protocol: 'https',
      search: '?orgId=1'
    })
  })
})
