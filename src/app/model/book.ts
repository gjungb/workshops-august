/**
 * Represents a book
 */
export interface Book {
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
