import os
import jokehandler

def main():

    os.system('cls' if os.name =='nt' else 'clear')
    print("\n En rolig historia: ")


    url = f"https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single"

    nr = 1
    jokeobj = jokehandler.Jokehandler(url)

    while True:

        t_joke = jokeobj.get_joke()

        print("---------------")
        print(f"{t_joke}")
        print("---------------")

        nr += 1

        entill = input ("vill du höra en till? j/n")

        if (entill == "n" or entill == "N"):
            break


main()
        