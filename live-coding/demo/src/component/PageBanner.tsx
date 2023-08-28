import { User } from './../types/User';

type PageBannerProps = {
  user: User,
  theme: string
}

function PageBanner(props: PageBannerProps): JSX.Element {
  
  return (
    <header>
      <h2>My awesome website</h2>
      <p>Welcome {props.user.role} {props.user.username}</p>
    </header>
  )
}

export default PageBanner;