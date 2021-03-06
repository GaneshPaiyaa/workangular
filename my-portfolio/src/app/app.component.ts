import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-portfolio';

  menuDataArray = [
    {
        "Name": "HOME",
        "id": "menuHome",
		"class" : "active"
    },
	{
        "Name": "ABOUT",
        "id": "menuAbout"
    },
	{
        "Name": "SERVICES",
        "id": "menuServices"
    },
	{
        "Name": "SKILLS",
        "id": "menuSkills"
    },
	{
        "Name": "EDUCATION",
        "id": "menuEducation"
    },
	{
        "Name": "EXPERIENCE",
        "id": "menuExperience"
    },
	{
        "Name": "WORK",
        "id": "menuWork"
    }
];

 rightPanelArray = [
  {
      "smallheading": "ABOUT ME",
      "mainheading": "WHO AM I ?",
  "description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "content": [
    {
      "descimg":"img",
      "desctitle":"HTML"
    },
    {
      "descimg":"img",
      "desctitle":"CSS"
    },
    {
      "descimg":"img",
      "desctitle":"JAVASCRIP"
    },
    {
      "descimg":"img",
      "desctitle":"Angular"
    }
  ]
  },
{
      "smallheading": "WHAT I DO?",
      "mainheading": "HERE ARE SOME OF MY EXPERTISE",
  "description":"Second Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  "content": [
    {
      "descimg":"img",
      "desctitle":"HTML",
      "descinfo":"testsss",
      "desicon":"icons"
    },
    {
      "descimg":"img",
      "desctitle":"CSS",
      "descinfo":"testsss",
      "desicon":"icons"
    },
    {
      "descimg":"img",
      "desctitle":"JAVASCRIP",
      "descinfo":"testsss",
      "desicon":"icons"
    },
    {
      "descimg":"img",
      "desctitle":"Angular",
      "descinfo":"testsss",
      "desicon":"icons"
    }
  ]
  }
]

}
