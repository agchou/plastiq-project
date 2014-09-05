PLASTIQ UX ENGINEER TEST


Hey there,

If you've received this test, that means we think you're a dynamite UX engineer, and we're looking forward to testing your chops a little bit.  This project is reasonably hefty - please complete it to the best of your ability.  When you come back in to chat with us, we'll take a look through your code and discuss various decisions related to your code structure and design.  Be prepared to talk about what was easy, what was hard, and what you might have done differently with the design of the UI (we love feedback!).

Best of luck!
The Plastiq Product Team


---------- Your Mission ----------

Implement the UI design found in plastiq-project.psd.


---------- Description ----------

This is a UI for adding payees to the Plastiq system.  The user should be able to choose whether they'd like to add a business or person.  Various placeholder text for the input can be found in the PSD.  If they select a business, type-ahead results should appear from a Google Maps API V3 integration.  If they select a person, no type-ahead results should appear.

If a type-ahead (business) result is selected, the payee row should be created following the example of Payee 2 or Payee 3, with the name and full address of the business pulled from Google.  The image on the left side is a default.  Type-ahead (business) results should also have a "Pay" button on the right side of the row which turns blue on hover (along with a tool-tip).

If a non-type-ahead business or a person is typed into the input field, then a payee following the example of Payee 1 or Payee 4 should be created.  The name should match the input field, and "Address not provided." should appear in the address area.  Again, the image to the left is a default person (or business) image, and no "Pay" button appears on the right side of the row.


---------- Other Requirements ----------

1) Integrate to the Google Maps API V3 for auto-complete results. (https://developers.google.com/maps/documentation/javascript/tutorial)
2) The implemented design should be pixel-perfect to the psd.
3) This is not a design for mobile, but use your best judgement to make the design scale well down to 300px wide.
4) Use the custom fonts provided in the /fonts directory.
5) Use your best judgement for animations and use graceful degradation to support browsers down to IE8.
6) Design your code in as modular a way as possible.
7) Use transitions and smooth animations to piece the UX together. (Very important)


---------- Tools You Must Use ----------

1) HTML/CSS3
2) Angular


---------- Tools You May Use ----------

• Feel free to use any other technologies you would like.  Keep in mind modularity and clarity.


---------- Other Notes ----------

• Don't worry about a back-end integration to a database or other data source.  The list of payees does not have to persist on reloading the page.
• In the zero state, no payees appear – only the input area should be visible.
• Any questions? Email alex@plastiq.com!


---------- Extra Credit ----------

• Enable the payee rows to be draggable for re-ordering.
• Tie the payees list to some storage – perhaps a cookie, session, local storage, or database.
• Expand on the zero state (e.g., create placeholder divs where the payee rows will appear)
