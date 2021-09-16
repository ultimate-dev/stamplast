export default class Settings {
  id?: number;
  phone?: string;
  email?: string;
  address_long?: string;
  address_short?: string;
  address_url?: string;
  facebook?: string | null;
  twitter?: string | null;
  instagram?: string | null;
  linkedin?: string | null;
  youtube?: string | null;
  lat?: string | number;
  lng?: string | number;
  createdAt?: Date;
  updatedAt?: Date;
}
