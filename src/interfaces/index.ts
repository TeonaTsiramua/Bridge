interface ContactInformation {
  email: string;
  phone: string;
  fb: string;
  instagram: string;
  whatsApp: string;
  address: string;
  destinationLat: number;
  destinationLng: number;
}

export interface Props {
  info: ContactInformation;
}
