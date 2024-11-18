'use client';

export default function Login() {
  return (
    <div>
      <h2 className="flex justify-center mb-8 ">Login</h2>
      <p>
        Si vous ne l&apos;avez pas encore fait, vous pouvez d&apos;abord vous{' '}
        <a className="font-bold hover:underline" href="/signup">
          CRÉER UN COMPTE
        </a>{' '}
      </p>
    </div>
  );
}
