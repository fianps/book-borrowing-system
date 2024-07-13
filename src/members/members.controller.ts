import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { MembersService } from './members.service';

@Controller('members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Get()
  findAll() {
    return this.membersService.findAll();
  }

  @Get(':code')
  findOne(@Param('code') code: string) {
    return this.membersService.findOne(code);
  }

  @Put('borrow/:memberCode/:bookCode')
  borrowBook(
    @Param('memberCode') memberCode: string,
    @Param('bookCode') bookCode: string,
  ) {
    return this.membersService.borrowBook(memberCode, bookCode);
  }

  @Put('return/:memberCode/:bookCode')
  returnBook(
    @Param('memberCode') memberCode: string,
    @Param('bookCode') bookCode: string,
  ) {
    return this.membersService.returnBook(memberCode, bookCode);
  }
}
