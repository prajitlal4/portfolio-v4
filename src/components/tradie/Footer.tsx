export default function TradieFooter() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between">
        <div>
          <p>Email: example@example.com</p>
          <p>Phone: 0400 000 000</p>
          <p>ABN: 12 345 678 901</p>
        </div>
        <div className="mt-6 md:mt-0 flex space-x-4">
          {/* Add social icons if needed */}
        </div>
      </div>
    </footer>
  );
}
