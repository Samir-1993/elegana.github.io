import React from 'react';

export const ReturnsAndRefunds = () => {
    return (
        <section className="common-section">
            <div className="container">
                <h1 className="heading1 mb-10">Returns & Refunds Policy</h1>

                <p className="details">
                    At Elegana, your satisfaction is our top priority. If you're not happy with your purchase, we're here to help. Please read our Returns & Refunds Policy below.
                </p>

                <h2 className="heading2 mt-40 mb-10">1. Return Eligibility</h2>
                <p className="details">
                    You may return most new, unused, and unworn items within <strong>7 days of delivery</strong> for a full refund or exchange. The item must be:
                </p>
                <ul className="list-disc ml-6 details">
                    <li>In its original packaging</li>
                    <li>With all tags and labels intact</li>
                    <li>Unwashed and unworn</li>
                    <li>Free from perfume, makeup, or damage</li>
                </ul>

                <h2 className="heading2 mt-20 mb-10">2. Non-Returnable Items</h2>
                <p className="details">
                    The following items cannot be returned:
                </p>
                <ul className="list-disc ml-6 details">
                    <li>Undergarments or lingerie</li>
                    <li>Customized or altered clothing</li>
                    <li>Items marked as "Final Sale" or "Non-returnable"</li>
                    <li>Gift cards</li>
                </ul>

                <h2 className="heading2 mt-20 mb-10">3. Return Process</h2>
                <p className="details">
                    To initiate a return:
                </p>
                <ol className="list-decimal ml-6 details">
                    <li>Email us at <a href="mailto:returns@elegana.com" className="text-blue-600">returns@elegana.com</a> with your order ID and reason for return.</li>
                    <li>Our team will confirm your request and provide return instructions.</li>
                    <li>Package the item securely and send it to our return address provided.</li>
                </ol>

                <h2 className="heading2 mt-20 mb-10">4. Refunds</h2>
                <p className="details">
                    Once we receive and inspect the returned item, we will notify you via email. If approved, the refund will be processed to your original payment method within <strong>7-10 business days</strong>.
                </p>

                <h2 className="heading2 mt-20 mb-10">5. Exchange Policy</h2>
                <p className="details">
                    We offer exchanges only for size or defective product issues. If the desired replacement item is out of stock, we will issue a full refund instead.
                </p>

                <h2 className="heading2 mt-20 mb-10">6. Return Shipping</h2>
                <p className="details">
                    Customers are responsible for return shipping costs unless the item received was defective or incorrect. In such cases, we will cover the return shipping charges.
                </p>

                <h2 className="heading2 mt-20 mb-10">7. Need Help?</h2>
                <p className="details">
                    For any questions regarding returns or refunds, please reach out to us at <a href="mailto:support@elegana.com" className="text-blue-600">support@elegana.com</a>.
                </p>

                <p className="text-sm text-gray-600 mt-6">Last updated: July 6, 2025</p>
            </div>
        </section>
    );
};
