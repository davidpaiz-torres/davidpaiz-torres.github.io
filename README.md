# Project_Operation_Restore_Roosevelt
 Final project on operation restore roosevelt
 For an up-to-date version of my notes/progress on this project that contains links to videos/resources used for learning, please visit: https://docs.google.com/document/d/16ztUZv4vTCRkrW6RgY7idTCwfsgvzisQEvt7RLD7ILQ/edit?tab=t.0

November 01, 2024
Changes to Dataset:
Merged data from “NYPD arrests – year to date” and “NYPD historic arrests” to analyze changes in sex work arrests from 2006-2024
Adjusted Date formatting to analyze year-to-year changes for all prostitution arrest (dropped month, day)
Added a tab to include links to penal laws for prostitution offenses
Split the year formatting for sex trafficking arrest data (dropped month and day to analyze year-by-year changes)

Visualizations:
Bar Chart comparing arrests per capita by borough – draft due by Sunday, 11/3
Bar Chart – Could display all arrests for charges related to sex work – then maybe a drop down that allows user to interact and select arrest rates for a specific charge (may have to use PD_Descriptor instead of Law_Code so people know what charge is what)
Line Chart – showing the decrease from 2014-2024 – draft due by Sunday, 11/3
Map (MapBox/MapLibre) – Where in queens are the most amount of arrests occurring? Is it Roosevelt Ave? – “concepts” of a draft due by Sunday, Nov. 3rd?
Github Repo Link: https://github.com/davidpaiz-torres/Project_Operation_Restore_Roosevelt

Questions that still need to be answered:
There was a lot of folks saying that the presence of sex work has become more apparent in recent years, especially outside of schools like PS-19. So far the data has shown arrests for all offenses related to sex work have decreased in the past decade. How significantly have arrests related to sex work in/near/around school zones changed in that period? 

Misc Notes:
Top 2 most common arrest types for prostitution from 2014-2024 are PL 230.00 and PL 230.40 (Prostitution and Patronizing for Prostitution. However, contrary to what the crackdown might lead you to believe, the arrest rates for charges related to sex work have actually dropped a significant amount since 2014 (see pivot table). The borough with the highest concentration of “prostitution-related arrests” is Queens. The most recent arrest for charges related to sex work was on April, 12, 2024, according to the data.

November 03, 2024
What’s left for Line Chart: 
A “hover" tooltip that allows you to get exact numbers per year.
Plan out design/color (dark red just a placeholder color?)

Sources used for help:

Create Beautiful Line Charts With D3 - D3.js Beginner's Guide
Adding Gridlines, Custom Axis, CSV Data - Create Beautiful Charts With D3 - D3.js Beginner's Guide
Adding Tooltips to D3.js Line Charts (How To) - D3.js Beginner's Guide (For final draft)
GeoPandas Documentation: (converting lat/longitude to geo-json)/Data structures