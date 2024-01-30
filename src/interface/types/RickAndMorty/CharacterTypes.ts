export type CharactersResponse = {
    Info: Info;
    Results: Character;
}
export type Info = {
    Count: Number;
    Pages: Number;
    Next: String;
    Prev: String;
  }

export type Origin = {
    Name: String;
    Url:String;
  };
  
export type Location = {
    Name: String;
    Url:  String;
  };
  
 export type Character = {
    Id: Number;
    Name: String;
    Status: String;
    Species: String;
    Type: String;
    Gender: String;
    Origin: Origin;
    Location: Location;
    Image: String;
    Episode: String[];
    Url: String;
    Created: String;
  };

 export type CharacterAndColorInfo = {
    Info:Character;
    StatusClassColor:String;
    GenderClassColor:String;
    SpecieClassColor:String;
}