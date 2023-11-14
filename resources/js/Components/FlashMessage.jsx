export default function FlashMessage({ className, message = '' }) {
  return (
    <div className={`flex justify-center text-center bg-green-200 rounded p-4 mb-4 text-sm text-green-800 ${className}`}>
      {message}
    </div>
  )
}