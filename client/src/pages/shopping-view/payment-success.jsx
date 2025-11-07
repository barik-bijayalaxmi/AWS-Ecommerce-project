import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

function PaymentSuccessPage() {
  const navigate = useNavigate();

  return (
    <Card className="p-10 text-center">
      <CardHeader className="p-0">
        <CardTitle className="text-3xl font-semibold">
          Order Placed Successfully!
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-3 text-lg text-gray-600">
        Your order has been placed successfully using <b>Cash on Delivery</b>.
        You’ll receive updates once it’s confirmed and shipped.
      </CardContent>
      <Button className="mt-6" onClick={() => navigate("/shop/account")}>
        View My Orders
      </Button>
    </Card>
  );
}

export default PaymentSuccessPage;
