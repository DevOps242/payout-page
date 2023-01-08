# Overview

The goal of this sample is to show your frontend skills and ability to take a design and
turn it into the (nicely-formatted and architected) jumble of HTML, CSS, and JS that
makes up the internet, and more importantly, our application. You can show your React
and Tailwind CSS skills by creating a single page that has all of the mentioned features.
The result should be a ZIP file of all the required HTML, CSS, and JS that's ready to
view in a browser (be sure to use relative URLs when referencing scripts and style
sheets).

## Features

You'll be re-building our pending payouts page, which shows merchants affiliate payouts
that haven't been processed by them yet. Feel free to use any dummy information you
want for the line items (fakenamegenerator.com is a useful tool for this). Screenshots
are shown on the next page. The following features should be built with React:

- Responsive design that works on all screen sizes, down to the "iPhone SE" option in Chrome dev tools
- Ability to select line items
- All the functionalities should contains a Jest test case
- Ability to select actions from the dropdowns
- Only the "Send payouts" feature needs to actually do anything, the rest of the action
  buttons should do nothing
- The "Pay All" button at the top of the page, along with the "Send payouts" and
  individual "Send payment" buttons should open the payments modal
- The payments modal should show a list of all affiliates, along with their associated
  payout amount and payout method (include a mix of "Store Credit" and "Cash")
- There should be a checkbox to the left of each affiliate. When checked or
  unchecked, the total at the bottom should be dynamically updated
- When the "Send payouts" button is pressed, an array of objects containing the
  selected affiliates' names and payout amounts should be printed to the console
- Clicking anywhere outside the modal should close it

## Images:
