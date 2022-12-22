import { GetServerSideProps, NextPage } from 'next'

export const getServerSideProps: GetServerSideProps = async () => ({
  redirect: {
    permanent: false,
    destination: '/board',
  },
})

const RedirectIndexPage: NextPage = () => null

export default RedirectIndexPage
