# autonomy

The open-source recipe platform built by and for homesteaders.

## One-Click Start

```bash
git clone https://github.com/nivennaturals/autonomy.git
cd autonomy
cp .env.example .env
npx prisma generate
npx prisma db push
npx prisma db seed
npm run dev
