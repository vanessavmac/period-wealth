# period-wealth

## Get Started
1. Clone the repository and run `docker compose up` in the root directory.
2. `cd server && npm run migrate && npm run seed:dev`
4. Add `.env.local` file with Google Client ID and Google Maps API Key. 
5. Add `.env` file with backend/db env variables.
6. `cd app && npm run dev`

## What is PeriodWealth?
A PERN stack web application for locating free period products. Users can quickly find a location near them, access the products, and update the inventory when they use a product. The tool is also available to the product providers so that they can manage their inventory and see how often the products are being accessed by the public.

Although the Government has taken steps towards providing free period products, oftentimes these services are not consistent. For example, the products may only be available at select locations or the product providers do not regularly refill their inventory. PeriodWealth offers a central tool so that users can find the products they need as fast as possible while helping product providers/government/non-profits track their efforts.

Users can sign up with their google account and do not provide any personal information. All inventory requests/changes made by public members are anonymous. Only product providers can update the "official" inventory counts.

![Screenshot 2023-05-14 at 2 56 21 AM](https://github.com/vanessavmac/period-wealth/assets/68434174/1a01ea77-6ed5-4a2f-ad9d-41f05edd5545)

![Screenshot 2023-05-14 at 3 09 15 AM](https://github.com/vanessavmac/period-wealth/assets/68434174/954c5c96-9c45-4504-87e6-4ac2b5cae8cf)
