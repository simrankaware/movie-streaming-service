import React from "react";
import FAQs from "../components/faqs";
import faqsData from '../fixtures/faqs';

export function FAQsContainer() {
    return (
            <FAQs.Container>
                <FAQs.Title>Frequently Asked Questions</FAQs.Title>
                <FAQs.Frame>
                {faqsData.map(
                    (item) => (
                    <FAQs.Item key={item.id}>
                        <FAQs.Header>{item.header}</FAQs.Header>
                        <FAQs.Body>{item.body}</FAQs.Body>
                    </FAQs.Item>
                ))}   
                </FAQs.Frame>
            </FAQs.Container>
    )
}