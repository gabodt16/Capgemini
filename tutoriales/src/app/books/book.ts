export class Book {
  public id: number;
  public autores: string;
  public titulo: string;

  static idSeq = 1;
  
  static from(autores: string, titulo: string): Book {
    const book = new Book();
    book.autores = autores;
    book.titulo = titulo;
    book.id = Book.idSeq++;
    return book;
  }
  
  constructor() {}
}
