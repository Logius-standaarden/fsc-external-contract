# Specification

## Properties for an External Contract Reference

The External Contract Reference can be added to the `ServiceConnectionGrant` and `ServicePublicationGrant` using Properties.
The Grants and Properties are both defined in [FSC Core](https://gitdocumentatie.logius.nl/publicatie/fsc/core/).

### ServiceConnectionGrant

* *delegation.connection.external_contract_reference(object):*
  The object that contains the delegation information
* *reference(string):*  
  The reference to the contract. Must be a string. Example shown uses a URL, but any string value is valid
* *delegator_id(string):*
  The ID of the Delegator that has delegated the authorisation to publish the Service
* *delegator_name(string):*
  The name of the Delegator that has delegated the authorisation to publish the Service

All properties are required when using the `delegation.connection.external_contract_reference` object.

Example:
```json
{
    "delegation.connection.external_contract_reference": {
        "reference": "https://linktocontract.nl/1",
        "delegator_id": "12345678901234567890",
        "delegator_name": "Example organisation"
    }
}
```

### ServicePublicationGrant

* *delegation.publication.external_contract_reference(object):*
  The object that contains the delegation information
* *reference(string):*  
  The reference to the contract. Must be a string. Example shown uses a URL, but any string value is valid
* *delegator_id(string):*
  The ID of the Delegator that has delegated the authorisation to publish the Service
* *delegator_name(string):*
  The name of the Delegator that has delegated the authorisation to publish the Service

All properties are required when using the `delegation.publication.external_contract_reference` object.

Example:
```json
{
    "delegation.publication.external_contract_reference": {
        "reference": "https://linktocontract.com/1",
        "delegator_id": "12345678901234567890",
        "delegator_name": "Example organisation"
    }
}
```

## Transaction log

In Groups that use the [Transaction log extension](https://gitdocumentatie.logius.nl/publicatie/fsc/logging/) the External Contract Reference properties **MUST** be stored as `additional_data` in the transaction log.

Example Transaction Log record:
```json
{
    "transaction_id": "019a7dea-9048-7c4d-9e66-4d3f75a18f58",
    "direction": "DIRECTION_INCOMING",
    "grant_hash": "$1$4$+PQI7we01qIfEwq4O5UioLKzjGBgRva6F5+bUfDlKxUjcY5yX1MRsn6NKquDbL8VcklhYO9sk18rHD6La3w/mg",
    "source": {
        "type": "SOURCE_TYPE_SOURCE",
        "outway_peer_id": "12345678901234567891"
    },
    "destination": {
        "type": "DESTINATION_TYPE_DESTINATION",
        "service_peer_id": "12345678901234567891"
    },
    "service_name": "random_service_name",
    "additional_data": {
        "delegation.connection.external_contract_reference": {
            "reference": "https://linktocontract.com/1",
            "delegator_id": "12345678901234567890",
            "delegator_name": "Example organization"
        } 
    }
    "created_at": 1672527600
}
```

## Access token

The External Contract Reference properties are added to the Access Token. FSC Core defines that properties added to a Grant **MUST** be added the access token as the `prp` claim.

Example access token bases on a `ServiceConnectionGrant` with an External Contract Reference.

```json
{
    "gid": "fsc.group.example.id",
    "gth": "$1$3$n4kellB6p2-VjrriscICkH3P5flgMmG6rX7MFIF3cU2Y2OVysoU6W903TkGCH3u_bB1XhOgdOVFhLCVj1iFnNg",
    "sub": "12345678901234567890",
    "iss": "12345678901234567891",
    "svc": "test",
    "aud": "https://inway.organization-b.open-fsc.localhost:443",
    "exp": 1493726400,
    "nbf": 1493722800,
    "cnf": {
        "x5t#S256": "06QekfpQ2IkYWhXyZqz3T1llvPEqDYYO0UyETSr7QdU"
    },
    "prp": {
        "delegation.connection.external_contract_reference": {
            "reference": "https://linktocontract.com/1",
            "delegator_id": "12345678901234567893",
            "delegator_name": "Example organization"
        }
    }
}
```

## Inway 

The Inway **MUST** include External Contract Reference properties in the Transaction Log records as `additional_data` when the Logging extension is used.

## Outway 

The Outway **MUST** include External Contract Reference properties in the Transaction Log records as `additional_data` when the Logging extension is used.
