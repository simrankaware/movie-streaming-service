import React from "react";
import Footer from "../components/footer";



export function FooterContainer() {
    return (
        <Footer>
        <Footer.Link>Questions? Contact us.</Footer.Link>
        <Footer.Break />
        <Footer.Row>
          <Footer.Column>
            <Footer.Link href="#">FAQ</Footer.Link>
            <Footer.Link href="#">Investor Relations</Footer.Link>
            <Footer.Link href="#">Ways to Watch</Footer.Link>
            <Footer.Link href="#">Corporate Information</Footer.Link>
          </Footer.Column>
  
          <Footer.Column>
            <Footer.Link href="#">Help Centre</Footer.Link>
            <Footer.Link href="#">Jobs</Footer.Link>
            <Footer.Link href="#">Terms of Use</Footer.Link>
            <Footer.Link href="#">Contact Us</Footer.Link>
          </Footer.Column>
  
          <Footer.Column>
            <Footer.Link href="#">Account</Footer.Link>
            <Footer.Link href="#">Redeem gift cards</Footer.Link>
            <Footer.Link href="#">Privacy</Footer.Link>
            <Footer.Link href="#">Speed Test</Footer.Link>
          </Footer.Column>
  
          <Footer.Column>
            <Footer.Link href="#">Media Centre</Footer.Link>
            <Footer.Link href="#">Buy gift cards</Footer.Link>
            <Footer.Link href="#">Cookie Preferences</Footer.Link>
            <Footer.Link href="#">Legal Notices</Footer.Link>
          </Footer.Column>
        </Footer.Row>
        <Footer.Break />
      </Footer>
    )
}