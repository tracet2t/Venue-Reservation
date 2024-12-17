import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Cookies from "js-cookie";

const CallbackPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams?.get("token");
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    if (token) {
      fetch(`/api/auth/verifytoken?token=${token}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            // Store the token in a cookie
            Cookies.set("authToken", token, { expires: 7, secure: true, path: "/verifytoken" });
            setMessage("Login successful! Redirecting...");
            // Add a slight delay before redirecting
            setTimeout(() => window.location.href = "/card_view", 1500);
          } else {
            setMessage(data.message || "Invalid or expired token.");
          }
        })
        .catch(() => setMessage("An error occurred. Please try again."));
    } else {
      setMessage("Token is missing. Please try again.");
    }
  }, [token]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <p className="text-center text-sm text-gray-700">
          {message || "Verifying your magic link..."}
        </p>
      </div>
    </div>
  );
};

export default CallbackPage;
