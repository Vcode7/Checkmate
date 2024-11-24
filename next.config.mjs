/** @type {import('next').NextConfig} */
<<<<<<< HEAD
const nextConfig = {};
=======
const nextConfig = {
    env: {
        NEXT_PUBLIC_ADMIN_USERNAME: process.env.ADMIN_USERNAME,
        NEXT_PUBLIC_ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
        NEXT_PUBLIC_AUTH_TOKEN:process.env.AUTH_TOKEN,
      },
};
>>>>>>> 25ee8bd (0000)

export default nextConfig;
