import { LoginLink } from '@kinde-oss/kinde-auth-nextjs/components';
import { Button } from '@mantine/core';

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">HomePage</h1>
      <LoginLink>
        <Button>SignIn</Button>
      </LoginLink>
    </div>
  );
}
