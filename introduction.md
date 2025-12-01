# Introduction

The External Contract Reference specification is an extension of the Federated Service Connectivity (FSC) Core specification.
This extension enables delegation of a Service publication and Service consumption through references to external contracts (contracts not defined by FSC).

## Purpose

In delegation as defined by FSC Core, the *delegator* organization MUST use a FSC Manager to create and sign Contracts.
This extension addresses scenarios where the delegator lacks the technical capability to operate FSC infrastructure,
allowing a *delegatee* (API provider or consumer) to act based on an external contract.

## Overall Operation of External Contract Reference

An API provider creates a Contract using a ServicePublicationGrant.
In this Contract the API provider adds a reference to an existing (paper) contract using Properties.
The Contract is received by the Peer acting as Directory. The Peer validates the reference manually or automatically, outside FSC with a custom component.
The validation itself is out of scope for this extension. The Contract is accepted and the Service is published on behalf of the organization specified in the reference.

An API consumer creates a Contract with a ServiceConnectionGrant.
In this Contract the API consumer adds a reference to an existing (paper) contract using Properties.
The Contract is received by the API provider. The API provider validates the reference manually or automatically, outside FSC with a custom component.
After validation the Contract is accepted and the API consumer can consume the Service on behalf of the organization specified in the reference.


## Terminology

This section lists terms (#header) and abbreviations that are used in this document.
This document assumes that the reader is familiar with the Terminology of FSC Core.

*contract:*

contract without a capital C is a contract that is not defined by FSC. 
