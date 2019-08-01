export class CreateUserDto {
  readonly name: string;
  readonly isTeacher: boolean;
  readonly pwHash: string;
}