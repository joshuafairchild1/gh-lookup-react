import RemoteCallTransport from "./RemoteCallTransport";

describe('Remote Call Transport', function() {

  // jest doesn't know what fetch is so just resolving it
  // successfully is the best we can do
  global.fetch = () => Promise.resolve({ json: () => 'success' });

  it('gets a json user object from github', async function() {
    const result = await new RemoteCallTransport()
      .findGithubUser('joshuafairchild1');
    //
    expect(result).toBe('success')
  });

  it('gets a json repo object/list of repos from github', async function() {
    const transport = new RemoteCallTransport(),
      result1 = await transport.findGithubRepo('gh-lookup-react'),
      result2 = await transport
        .findGithubRepo('joshuafairchild1', 'gh-lookup-react');
    expect(result1).toBe('success');
    expect(result2).toBe('success');
  });

  it('throws errors when given non-string inputs', function () {
    const transport = new RemoteCallTransport();
    expect(() => transport.findGithubRepo()).toThrow();
    expect(() => transport.findGithubRepo(null)).toThrow();
    expect(() => transport.findGithubRepo(42)).toThrow();
    expect(() => transport.findGithubRepo('validName', 42)).toThrow();
    expect(() => transport.findGithubUser()).toThrow();
    expect(() => transport.findGithubUser(null)).toThrow();
    expect(() => transport.findGithubUser(undefined)).toThrow();
    expect(() => transport.findGithubUser(42)).toThrow();
  })

});