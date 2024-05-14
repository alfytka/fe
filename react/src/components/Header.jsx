export default function Header({ author }) {
  return <h1>Learn React with {author ? author : 'Me'}</h1>
}