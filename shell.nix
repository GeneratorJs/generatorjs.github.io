{ pkgs ? import <nixpkgs> { config = { allowUnfree = true;  }; } }:
#{ pkgs ? import (fetchTarball  "https://github.com/NixOS/nixpkgs/tarball/nixos-24.05") {} }:
let
  message = "Lets Start Development";
in 

pkgs.mkShellNoCC {
  
  buildInputs = with pkgs; [ nodejs ];

  packages = with pkgs; [
    nodejs_22
    nodePackages.browser-sync 
    nodePackages.nodemon 
    vscodium 
    vscode
    firefox
    nodejs 
    vim 
    curl     
  ];

  shellHook = ''
    cowsay ${message}
    npm run dev & echo "y" | code . & firefox localhost:3000 & npm run dev & firefox 127.0.0.1:5501
    '';
}
