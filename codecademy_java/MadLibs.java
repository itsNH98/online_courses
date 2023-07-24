public class Madlibs {
    /*
    This program generates a mad libbed story.
    Author: Nic
    Date: 2/19/2021
    */
        public static void main(String[] args){
        String name1 = "Nic";
        String adjective1 = "Nice"; 
        String adjective2 = "Excellent";
        String adjective3 = "Beautiful";
        String verb1 = "Eat";
        String noun1 = "Dog";
        String noun2 = "Turtle";
        String noun3 = "Cat";
        String noun4 = "Cow";
        String noun5 = "Horse";
        String noun6 = "Crocodile";
        String name2 = "Jessic";
        int number = 10;
        String place1 = "Montreal";
        
        
        
        //The template for the story
        String story = "This morning "+name1+" woke up feeling "+adjective1+". 'It is going to be a "+adjective2+" day!' Outside, a bunch of "+noun1+"s were protesting to keep "+noun2+" in stores. They began to "+verb1+" to the rhythm of the "+noun3+", which made all the "+noun4+"s very "+adjective3+". Concerned, "+name1+" texted "+name2+", who flew "+name1+" to "+place1+" and dropped "+name1+" in a puddle of frozen "+noun5+". "+name1+" woke up in the year "+number+", in a world where "+noun6+"s ruled the world.";
  
        System.out.println(story);
      }       
  }
  