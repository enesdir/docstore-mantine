# DocStore-Mantine

This project is built with [Next.js](https://nextjs.org/) and uses [Supabase](https://supabase.io/) for authentication and database management.

To see the use and details of this project::
[Project Docs](./docs/README.md)

## Stacks

to see in detail the technologies used in this project: [Next.js + Typescript](https://nextjs.org/)

- **Framework**: [Next.js + Typescript](https://nextjs.org/)
- **Database & Auth**: [SupaBase](https://supabase.io/)
- **Deployment**: [Vercel](https://vercel.com)
- **Styling**: [Mantine](https://mantine.dev/)
- **Data Validator**: [Zod](https://zod.dev/)

## Getting Started

### Prerequisites

- node >=18.4.0
- supabase account

### Running Locally

This application requires Node.js.

1. Clone the repository to your local machine.

```bash
git clone https://github.com/enesdir/docstore-mantine.git
cd docstore-mantine
```

2. Install dependencies by running `npm install`.

```bash
npm install
```

3. Set environment variables. Create a `.env.local` file in the root directory of the project and add the following variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=<your-supabase-url>
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your-supabase-anon-key>
```

4. Start the development server by running

```bash
npm run dev
```

## Contributing

Contributions to the project are welcome! To contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with descriptive commit messages.
4. Push your branch to your forked repository.
5. Create a pull request to merge your changes to the main repository.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
