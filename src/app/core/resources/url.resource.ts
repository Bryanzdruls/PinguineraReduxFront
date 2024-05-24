import { environment } from "../../../environments/environment.development";

export const URL_RESOURCES = {
  getProviderId: `${environment.api}/providerid`,
  getproducts: `${environment.api}/getcopies`,
  createproduct: `${environment.api}/calculateprice`,
  calculatemultipleprice: `${environment.api}/calculatemultipleprice`,
  calculatebudget: `${environment.api}/calculatebudget`,
  calculatemultiplepricegrouped: `${environment.api}/calculatemultiplepricegrouped`,
}
