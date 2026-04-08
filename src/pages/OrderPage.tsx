import { pageIntros } from '../content/site';
import { OrderForm } from '../components/order/OrderForm';
import { SectionHeading } from '../components/ui/SectionHeading';

export function OrderPage() {
  return (
    <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <SectionHeading
        eyebrow={pageIntros.order.eyebrow}
        title={pageIntros.order.title}
        copy={pageIntros.order.copy}
      />
      <div className="mt-12">
        <OrderForm />
      </div>
    </div>
  );
}
