/**
    Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

    Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

        http://aws.amazon.com/apache2.0/

    or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
*/

/**
 * This simple sample has no external dependencies or session management, and shows the most basic
 * example of how to create a Lambda function for handling Alexa Skill requests.
 *
 * Examples:
 * One-shot model:
 *  User: "Alexa, ask Random Facts for a random fact"
 *  Alexa: "Here's your random fact: ..."
 */

/**
 * App ID for the skill
 */
var APP_ID = "amzn1.echo-sdk-ams.app.f52cb75a-ed3c-4709-a651-459d3f48350c";

/**
 * Array containing random facts.
 */
var RANDOM_FACTS = [
    "A year on Mercury is just 88 days long.",
    "Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.",
    "Venus rotates counter-clockwise, possibly because of a collision in the past with an asteroid.",
    "On Mars, the Sun appears about half the size as it does on Earth.",
    "Earth is the only planet not named after a god.",
    "Jupiter has the shortest day of all the planets.",
    "The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.",
    "The Sun contains 99.86% of the mass in the Solar System.",
    "The Sun is an almost perfect sphere.",
    "A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.",
    "Saturn radiates two and a half times more energy into space than it receives from the sun.",
    "The temperature inside the Sun can reach 15 million degrees Celsius.",
    "The Moon is moving approximately 3.8 cm away from our planet every year.",
    "When a male penguin falls in love with female penguin, he searches the entire beach to find the perfect pebble to present to her.",
    "New Zealand will deny people residency visas if they have too high of a Body Mass Index and there are cases where people have been rejected because of their weight.",
    "Whenever a pregnant women suffers from organ damage like a heart attack, the fetus sends stem cells to the organ helping it to repair.",
    "It is illegal to climb trees in Oshawa, a town in Ontario, Canada.",
    "Brown eyes are blue underneath, and you can actually get a surgery to turn brown eyes blue.",
    "When you blush, the lining of your stomach also turns red.",
    "A bolt of lightning is six times hotter than the sun.",
    "Only 2% of Earth population naturally has green eyes.",
    "Having bridesmaids in a wedding wasn’t originally for moral support. They were intended to confuse evil spirits or those who wished to harm the bride.",
    "A blind chameleon still changes colors to match his environment.",
    "The Portuguese jellyfish tentacles have been known to grow a mile in length, catching anything in it’s path by stinging it’s prey.",
    "Icelanders consume more Coca-Cola per Capita than any other nation.",
    "A hedgehog’s heart beats 300 times a minute on average.",
    "Dueling is legal in Paraguay as long as both parties are registered blood donors.",
    "Between 25% and 33% of the population sneeze when exposed to light.",
    "The most common name in world is Muhammad.",
    "Mount Olympus on Mars is three times the size of Mount Everest.",
    "Most toilets flush in E flat.",
    "2,000 pounds of space dust and other space debris fall on the Earth every day.",
    "Approximately 40,000 Americans are injured by toilets each year.",
    "Each month, there is at least one report of UFOs from each province of Canada.",
    "You can be fined up to $1,000 for whistling on Sunday in Salt Lake City, Utah.",
    "It takes about 142.18 licks to reach the center of a Tootsie pop.",
    "All 50 states are listed across the top of the Lincoln Memorial on the back of the $5 bill.",
    "In space, astronauts are unable to cry, because there is no gravity and the tears won’t flow.",
    "Chewing gum while peeling onions will keep you from crying.",
    "There are more plastic flamingos in the U.S than there are real ones.",
    "During it’s lifetime an oyster changes its sex from male to female and back, several times.",
    "Cephalacaudal recapitulation is the reason our extremities develop faster than the rest of us.",
    "Nutmeg is extremely poisonous if injected intravenously.",
    "Daniel Boone hated coonskin caps.",
    "More people speak English in China than the United States.",
    "All the swans in England are property of the Queen.",
    "The town of Calma, Chile in the Atacama Desert has never had rain.",
    "Cleveland spelled backwards is DNA level C.",
    "Winston Churchill was born in a ladies room during a dance.",
    "A normal raindrop falls at about 7 miles per hour.",
    "The average person falls asleep in seven minutes.",
    "There are 336 dimples on a regulation golf ball.",
    "Stewardesses is the longest word that is typed with only the left hand.",
    "The pound key on your keyboard is called an octotroph.",
    "The only domestic animal not mentioned in the Bible is the cat.",
    "During his entire life, Vincent Van Gogh sold exactly one painting, Red Vineyard at Arles.",
    "Certain species of male butterflies produce scents that serve in attracting females during courtship.",
    "There are no clocks in Las Vegas gambling casinos.",
    "Male bees will try to attract sex partners with orchid fragrance.",
    "On a Canadian two-dollar bill, the American flag is flying over the Parliament Building.",
    "Cherries can cause cancer cells to kill themselves.",
    "Cracking knuckles does not hurt your bones or cause arthritis, the sound you hear is gas bubbles bursting.",
    "Shark pregnancies last up to 4 years.",
    "A full moon is nine times brighter than a half moon.",
    "Smiling actually boosts your immune system.",
    "Dogs and elephants are the only animals that understand pointing.",
    "The main exporter of Brazil nuts is not Brazil. It’s Bolivia.",
    "At rest, your brain burns one fifth of a calorie per minute.",
    "A single tree can absorb more than 10 pounds of CO2 each year.",
    "Amazon River once flowed in the opposite direction, from east to west.",
    "The original recipe for chocolate contained chili powder instead of sugar.",
    "Africa is divided into more countries than any other continent.",
    "A cat’s lower jaw cannot move sideways.",
    "Holland is the only country with a national dog.",
    "On average, a laptop uses half as much energy as a desktop computer.",
    "Fish can drown.",
    "Forty is the only number whose letters are in alphabetical order.",
    "Squirrels lose more than half of the nuts they hide.",
    "The human brain is about 80% water.",
    "Jupiter spins so fast that there is a new sunrise nearly every 10 hours."
];

/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

/**
 * RandomFacts is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var RandomFacts = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
RandomFacts.prototype = Object.create(AlexaSkill.prototype);
RandomFacts.prototype.constructor = RandomFacts;

RandomFacts.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    console.log("RandomFacts onSessionStarted requestId: " + sessionStartedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

RandomFacts.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    console.log("RandomFacts onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    handleNewFactRequest(response);
};

/**
 * Overridden to show that a subclass can override this function to teardown session state.
 */
RandomFacts.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    console.log("RandomFacts onSessionEnded requestId: " + sessionEndedRequest.requestId
        + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

RandomFacts.prototype.intentHandlers = {
    "GetNewFactIntent": function (intent, session, response) {
        handleNewFactRequest(response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can ask Random Facts tell me a random fact, or, you can say exit... What can I help you with?", "What can I help you with?");
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
};

/**
 * Gets a random new fact from the list and returns to the user.
 */
function handleNewFactRequest(response) {
    // Get a random fact from the random facts list
    var factIndex = Math.floor(Math.random() * RANDOM_FACTS.length);
    var fact = RANDOM_FACTS[factIndex];

    // Create speech output
    var speechOutput = "Here's your random fact: " + fact;

    response.tellWithCard(speechOutput, "RandomFacts", speechOutput);
}

// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    // Create an instance of the RandomFacts skill.
    var randomFacts = new RandomFacts();
    randomFacts.execute(event, context);
};

