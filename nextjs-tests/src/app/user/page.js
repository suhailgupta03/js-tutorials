function UserDetails() {
  return <textarea rows={30} cols={30}></textarea>;
}

export default function User() {
  return (
    <>
      <UserDetails />
    </>
  );
}
