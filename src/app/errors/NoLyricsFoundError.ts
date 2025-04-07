export class NoLyricsFoundError extends Error {
  constructor() {
    super('No lyrics found');
  }
}
