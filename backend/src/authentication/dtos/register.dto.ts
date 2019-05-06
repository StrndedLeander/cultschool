import { Address } from '../types/address.type'

export class RegisterDTO {
  readonly username: string;
  readonly email: string;
  readonly phone_number: string
  readonly password: string
  readonly name: string
  readonly birthdate: Date
  readonly preferred_username: string;
  readonly gender: string;
  readonly address: Address
} 