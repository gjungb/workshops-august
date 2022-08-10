/**
 * Represents a book
 */
export interface Book {
  /**
   * The ISBN
   * @link {https://de.wikipedia.org/wiki/Internationale_Standardbuchnummer}
   */
  isbn: string;
  /**
   * The title of the book
   */
  title: string;
  /**
   * The fullname of the person who wrote the book
   */
  author: string;
  /**
   * A short summary
   */
  abstract?: string;
}
