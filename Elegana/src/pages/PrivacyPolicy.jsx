import React from 'react';

export const PrivacyPolicy = () => {
    return (
        <section className="common-section">
            <div className="container">
                <h1 className="heading1 mb-10">Privacy Policy</h1>
                <p className="details">
                    At Elegana, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal information when you visit our website <strong>www.elegana.com</strong>.
                </p>

                <h2 className="heading2 mt-30 mb-10">1. Information We Collect</h2>
                <p className="details">
                    We collect various types of personal data, including:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone number</li>
                    <li>Shipping & billing address</li>
                    <li>Payment details (processed via secure payment gateways)</li>
                    <li>Order history and preferences</li>
                </ul>

                <h2 className="heading2 mt-30 mb-10">2. How We Use Your Information</h2>
                <p className="details">
                    The information we collect is used to:
                </p>
                <ul className="list-disc ml-6 mb-4">
                    <li>Process and ship your orders</li>
                    <li>Send order and shipping confirmations</li>
                    <li>Provide customer support</li>
                    <li>Improve our products and services</li>
                    <li>Send promotional emails (only with your consent)</li>
                </ul>

                <h2 className="heading2 mt-30 mb-10">3. Cookies and Tracking</h2>
                <p className="details">
                    We use cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser.
                </p>

                <h2 className="heading2 mt-30 mb-10">4. Data Security</h2>
                <p className="details">
                    Your personal data is stored on secure servers. We implement strict security measures to protect against unauthorized access, alteration, disclosure, or destruction of your information.
                </p>

                <h2 className="heading2 mt-30 mb-10">5. Sharing Your Information</h2>
                <p className="details">
                    We do not sell or rent your personal data to third parties. We may share your data with trusted partners who help us operate our website and deliver services, under strict confidentiality agreements.
                </p>

                <h2 className="heading2 mt-30 mb-10">6. Your Rights</h2>
                <p className="details">
                    You have the right to access, update, or delete your personal data. To make any requests, please contact us at <a href="mailto:support@elegana.com" className="text-blue-600">support@elegana.com</a>.
                </p>

                <h2 className="heading2 mt-30 mb-10">7. Changes to This Policy</h2>
                <p className="details">
                    We may update this Privacy Policy from time to time. All changes will be posted on this page with the updated date.
                </p>

                <p className="details mt-50">Last updated: July 6, 2025</p>
            </div>
        </section>
    );
};
