import { Injectable, NotFoundException } from '@nestjs/common';
import { Member } from './entities/member.entity';

@Injectable()
export class MembersService {
  private members: Member[] = [
    {
      code: 'M001',
      name: 'Angga',
    },
    {
      code: 'M002',
      name: 'Ferry',
    },
    {
      code: 'M003',
      name: 'Putri',
    },
  ];

  private memberBorrowings = new Map<string, string[]>(); // Tracks member borrowings

  findAll() {
    return this.members;
  }

  findOne(code: string) {
    const member = this.members.find((member) => member.code === code);
    if (!member) {
      throw new NotFoundException(`Member with code ${code} not found`);
    }
    return member;
  }

  borrowBook(memberCode: string, bookCode: string) {
    const borrowings = this.memberBorrowings.get(memberCode) || [];
    if (borrowings.length >= 2) {
      throw new Error('Member has already borrowed 2 books');
    }
    borrowings.push(bookCode);
    this.memberBorrowings.set(memberCode, borrowings);
    return { memberCode, borrowedBooks: borrowings };
  }

  returnBook(memberCode: string, bookCode: string) {
    const borrowings = this.memberBorrowings.get(memberCode) || [];
    const index = borrowings.indexOf(bookCode);
    if (index === -1) {
      throw new NotFoundException('Book not borrowed by member');
    }
    borrowings.splice(index, 1);
    this.memberBorrowings.set(memberCode, borrowings);
    return { memberCode, borrowedBooks: borrowings };
  }
}
