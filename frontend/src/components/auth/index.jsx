import { Button, Card, TextInput, Avatar } from "flowbite-react";

export default function Login() {
  return (
    <center style={{ marginTop: "250px" }}>
      <Card className="max-w-md">
        <Avatar img="/user.png" rounded size="xl" />
        <h3 className="text-center text-xl mb-4 mt-4">Welcome to Chit-Chat</h3>
        <form className="flex flex-col gap-4">
          <div>
            <TextInput id="email" placeholder="Email" required type="email" />
          </div>
          <div>
            <TextInput
              id="password"
              required
              type="password"
              placeholder="Password"
            />
          </div>

          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </center>
  );
}
