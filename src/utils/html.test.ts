import { removeHtmlTags } from './html';

describe('utils/html', () => {
  it('should remove all html tags from given string', () => {
    const htmlInput = '<p>The girls take <strong>Sheldon</strong> dancing.</p>';
    const expectedHtmlOutput = 'The girls take Sheldon dancing.';

    expect(removeHtmlTags(htmlInput)).toBe(expectedHtmlOutput);
  });
});