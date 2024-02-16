Feature: Purchase Feature

  Background:
    Given I open the "https://www.saucedemo.com/" page

  Scenario:  Validate successful purchase text
  Then I will login as 'standard_user'
  Then I will add the backpack to the cart
  And Select the cart
  And Select Checkout
  And Fill in the First Name, Last Name, and Zip as 'Kaushik', 'Srinivasan' and '07054'
  And Select Finish
  Then Validate the text 'Thank you for your order!'
    # TODO: Select the cart (top-right)
    # TODO: Select Checkout
    # TODO: Fill in the First Name, Last Name, and Zip/Postal Code
    # TODO: Select Continue
    # TODO: Select Finish
    # TODO: Validate the text 'Thank you for your order!'