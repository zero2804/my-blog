export default function MailMapCard({ email = "hello@example.com", address = "г. Ташкент" }: { email?: string; address?: string }) {
  return (
    <div className="border rounded p-4">
      <h4 className="font-semibold">Контакты</h4>
      <p className="text-sm mt-2">Email: <a href={`mailto:${email}`} className="underline">{email}</a></p>
      <p className="text-sm mt-1">Адрес: {address}</p>
      {/* Можно вставить iframe карты или svg */}
    </div>
  );
}
