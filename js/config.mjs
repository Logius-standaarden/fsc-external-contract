import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";

loadRespecWithConfiguration({
    specStatus: "CV",
    specType: "ST",
    pubDomain: "fsc",
    shortName: "ext",
    publishDate: "2026-01-19",
    publishVersion: "1.0.0",
    previousPublishVersion: [],

    editors:
        [
            {
                name: "Logius",
                company: "Logius",
                companyURL: "https://github.com/Logius-standaarden",
            }
        ],
    authors:
        [

            {
                name: "Ronald Koster",
                company: "PhillyShell",
                extras: [
                    {
                        name: "Email",
                        href: "mailto:rfc@phillyshell.nl",
                    }
                ]
            },
            {
                name: "Niels Dequeker",
                company: "ND Software",
                extras: [
                    {
                        name: "Email",
                        href: "mailto:niels@nd-software.be",
                    }
                ]
            },
            {
                name: "Lonneke Dikmans",
                company: "RINIS",
                extras: [
                    {
                        name: "Email",
                        href: "mailto:ldikmans@rinis.nl",
                    }
                ]
            },
        ],
    github: "https://github.com/Logius-standaarden/fsc-external-contract",
});


