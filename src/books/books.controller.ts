import { Controller, Get, Post, Param, Put } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: string) {
    return this.booksService.findOne(code);
  }

  @Put('borrow/:code')
  borrowBook(@Param('code') code: string) {
    return this.booksService.borrowBook(code);
  }

  @Put('return/:code')
  returnBook(@Param('code') code: string) {
    return this.booksService.returnBook(code);
  }
}
