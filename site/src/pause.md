# Pause and Plan: Your Research, Your Way

The Discovery Database has thirteen [Entry Types](entries/index.md) for you to choose from to represent your own Tiny Earth research flow. It is very rare for any one person to use all thirteen for a single research project.

However, for almost all research flows, the easiest way to begin in the Discovery Database is one of two options.

---
## Option 1 - Sample, Isolate, then Dilution

The first option has the least steps, but the order of the steps may seem unintuitive:

1. Enter an [Environmental Sample](entries/sample.md) for each of the samples you collected or plan to collect for your project
2. Enter an [Isolate](entries/isolate.md) for each isolate of interest that you cultivated from your samples
3. Enter [Serial Dilution Plates](entries/dilution.md) to describe the conditions under which those isolates were cultivated from those samples. Because plate entries refer to samples *and* isolates, like a bridge between the two, it is easiest to enter plates after your samples and isolates have been recorded, so that your plate entry's data can refer to its sample and isolates right away
4. Then as your research progresses, enter other [Entry Types](entries/index.md) that capture the screens, tests, and so on that you perform on your isolates

!!! note ""
    ```yuml
    [(1) Environmental Sample|Nickname: Camp Randall;Date: 2024/05/01;...]
    ``` Illustration of an Environmental Sample entry

!!! note ""
    ```yuml
    [(1) Environmental Sample|Nickname: Camp Randall;Date: 2024/05/01;...]
    [(2) Isolate|Nickname: Randall 1;Date: 2024/05/03]
    [(3) Isolate|Nickname: Randall 2;Date: 2024/05/03]
    [(4) Isolate|Nickname: Yellow Blob;Date: 2024/05/05]
    [(5) Isolate|Nickname: Lil Squishy;Date: 2024/05/05]
    [(1) Environmental Sample]<--[(2) Isolate]
    [(1) Environmental Sample]<--[(3) Isolate]
    [(1) Environmental Sample]<--[(4) Isolate]
    [(1) Environmental Sample]<--[(5) Isolate]
    ``` The illustration now also includes four Isolate entries that were cultivated from that sample. These entries refer back to the original entry, as indicated by arrows. The isolates also appear to have been identified by two different students working with the same sample, because they were named with different styles and identified on different dates

!!! note ""
    ```yuml
    [(1) Environmental Sample|Nickname: Camp Randall;Date: 2024/05/01;...]
    [(2) Isolate|Nickname: Randall 1;Date: 2024/05/03]
    [(3) Isolate|Nickname: Randall 2;Date: 2024/05/03]
    [(4) Isolate|Nickname: Yellow Blob;Date: 2024/05/05]
    [(5) Isolate|Nickname: Lil Squishy;Date: 2024/05/05]
    [(6) Serial Dilution Plate|Nickname: TSA Plate;Date:2024/05/01;Media: TSA;...]
    [(7) Serial Dilution Plate|Nickname: LBA Plate;Date:2024/05/02;Media: LBA;...]
    [(1) Environmental Sample]<--[(2) Isolate]
    [(1) Environmental Sample]<--[(3) Isolate]
    [(1) Environmental Sample]<--[(4) Isolate]
    [(1) Environmental Sample]<--[(5) Isolate]
    [(1) Environmental Sample]<--[(6) Serial Dilution Plate]
    [(1) Environmental Sample]<--[(7) Serial Dilution Plate]
    [(6) Serial Dilution Plate]-->[(2) Isolate]
    [(6) Serial Dilution Plate]-->[(3) Isolate]
    [(7) Serial Dilution Plate]-->[(4) Isolate]
    [(7) Serial Dilution Plate]-->[(5) Isolate]
    ``` The illustration now also includes two Serial Dilution Plate entries that record the conditions under which those isolates were cultivated from that sample. The plates sit between the sample and the isolates, like a bridge between the two. The two plates also used different media: one TSA, one LBA

!!! note ""
    ```yuml
    [(1) Environmental Sample]<--[(2) Isolate]
    [(1) Environmental Sample]<--[(3) Isolate]
    [(1) Environmental Sample]<--[(4) Isolate]
    [(1) Environmental Sample]<--[(5) Isolate]
    [(1) Environmental Sample]<--[(6) Serial Dilution Plate]
    [(1) Environmental Sample]<--[(7) Serial Dilution Plate]
    [(1) Environmental Sample]<--[(8) Antibiotic Activity Screen - Library Plate]
    [(6) Serial Dilution Plate]-->[(2) Isolate]
    [(6) Serial Dilution Plate]-->[(3) Isolate]
    [(7) Serial Dilution Plate]-->[(4) Isolate]
    [(7) Serial Dilution Plate]-->[(5) Isolate]
    [(8) Antibiotic Activity Screen - Library Plate]-->[(4) Isolate]
    [(8) Antibiotic Activity Screen - Library Plate]-->[(5) Isolate]
    [(4) Isolate]<--[(9) Streak Plate]
    [(4) Isolate]<--[(10) Antibiotic Activity Screen - Isolate]
    [(4) Isolate]<--[(11) Microbiological Characterization]
    [(4) Isolate]<--[(12) 16S RRNA Analysis]
    ``` The illustration now also includes various additional entries: a library screen, then a streak plate, isolate screen, characterization, and 16S rRNA analysis of one isolate in that library

---
## Option 2 - Sample, Dilution, Isolate, then edit Dilution

The second option more closely matches the Tiny Earth research flow, but requires one additional step:

1. Enter an [Environmental Sample](entries/sample.md) for each of the samples you collected or plan to collect for your project
2. Enter [Serial Dilution Plates](entries/dilution.md) to describe the conditions under which you hope to cultivate isolates from your samples
3. Enter an [Isolate](entries/isolate.md) for each isolate of interest that you cultivated from your samples
4. Edit your [Serial Dilution Plates](entries/dilution.md) now that isolates have been identified, to connect each isolate to the conditions under which it was cultivated
5. Then as your research progresses, enter other [Entry Types](entries/index.md) that capture the screens, tests, and so on that you perform on your isolates

!!! note ""
    ```yuml
    [(1) Environmental Sample|Nickname: Camp Randall;Date: 2024/05/01;...]
    ``` Illustration of an Environmental Sample entry

!!! note ""
    ```yuml
    [(1) Environmental Sample|Nickname: Camp Randall;Date: 2024/05/01;...]
    [(2) Serial Dilution Plate|Nickname: TSA Plate;Date:2024/05/01;Media: TSA;...]
    [(3) Serial Dilution Plate|Nickname: LBA Plate;Date:2024/05/02;Media: LBA;...]
    [(1) Environmental Sample]<--[(2) Serial Dilution Plate]
    [(1) Environmental Sample]<--[(3) Serial Dilution Plate]
    ``` The illustration now also includes two Serial Dilution Plate entries that record the conditions under which those isolates were cultivated from that sample. These entries refer back to the original entry, as indicated by arrows. The two plates also used different media: one TSA, one LBA

!!! note ""
    ```yuml
    [(1) Environmental Sample|Nickname: Camp Randall;Date: 2024/05/01;...]
    [(2) Serial Dilution Plate|Nickname: TSA Plate;Date:2024/05/01;Media: TSA;...]
    [(3) Serial Dilution Plate|Nickname: LBA Plate;Date:2024/05/02;Media: LBA;...]
    [(4) Isolate|Nickname: Randall 1;Date: 2024/05/03]
    [(5) Isolate|Nickname: Randall 2;Date: 2024/05/03]
    [(6) Isolate|Nickname: Yellow Blob;Date: 2024/05/05]
    [(7) Isolate|Nickname: Lil Squishy;Date: 2024/05/05]
    [(1) Environmental Sample]<--[(2) Serial Dilution Plate]
    [(1) Environmental Sample]<--[(3) Serial Dilution Plate]
    [(1) Environmental Sample]<--[(4) Isolate]
    [(1) Environmental Sample]<--[(5) Isolate]
    [(1) Environmental Sample]<--[(6) Isolate]
    [(1) Environmental Sample]<--[(7) Isolate]
    ``` The illustration now also includes four Isolate entries that were cultivated from the sample.  The isolates also appear to have been identified by two different students working with the same sample, because they were named with different styles and identified on different dates. However, there is no indication yet how the Isolates were cultivated, as there is no connection from each Isolate to a Serial Dilution Plate

!!! note ""
    ```yuml
    [(1) Environmental Sample|Nickname: Camp Randall;Date: 2024/05/01;...]
    [(2) Serial Dilution Plate|Nickname: TSA Plate;Date:2024/05/01;Media: TSA;...]
    [(3) Serial Dilution Plate|Nickname: LBA Plate;Date:2024/05/02;Media: LBA;...]
    [(4) Isolate|Nickname: Randall 1;Date: 2024/05/03]
    [(5) Isolate|Nickname: Randall 2;Date: 2024/05/03]
    [(6) Isolate|Nickname: Yellow Blob;Date: 2024/05/05]
    [(7) Isolate|Nickname: Lil Squishy;Date: 2024/05/05]
    [(1) Environmental Sample]<--[(2) Serial Dilution Plate]
    [(1) Environmental Sample]<--[(3) Serial Dilution Plate]
    [(1) Environmental Sample]<--[(4) Isolate]
    [(1) Environmental Sample]<--[(5) Isolate]
    [(1) Environmental Sample]<--[(6) Isolate]
    [(1) Environmental Sample]<--[(7) Isolate]
    [(2) Serial Dilution Plate]-->[(4) Isolate]
    [(2) Serial Dilution Plate]-->[(5) Isolate]
    [(3) Serial Dilution Plate]-->[(6) Isolate]
    [(3) Serial Dilution Plate]-->[(7) Isolate]
    ``` The illustration now also includes connections from the two Serial Dilution Plate entries to the four Isolate entries, indicating the conditions under which each isolate was cultivated in the sample. Also, the plates now sit between the sample and the isolates, like a bridge between the two

!!! note ""
    ```yuml
    [(1) Environmental Sample]<--[(2) Serial Dilution Plate]
    [(1) Environmental Sample]<--[(3) Serial Dilution Plate]
    [(1) Environmental Sample]<--[(4) Isolate]
    [(1) Environmental Sample]<--[(5) Isolate]
    [(1) Environmental Sample]<--[(6) Isolate]
    [(1) Environmental Sample]<--[(7) Isolate]
    [(1) Environmental Sample]<--[(8) Antibiotic Activity Screen - Library Plate]
    [(2) Serial Dilution Plate]-->[(4) Isolate]
    [(2) Serial Dilution Plate]-->[(5) Isolate]
    [(3) Serial Dilution Plate]-->[(6) Isolate]
    [(3) Serial Dilution Plate]-->[(7) Isolate]
    [(8) Antibiotic Activity Screen - Library Plate]-->[(4) Isolate]
    [(8) Antibiotic Activity Screen - Library Plate]-->[(5) Isolate]
    [(4) Isolate]<--[(9) Streak Plate]
    [(4) Isolate]<--[(10) Antibiotic Activity Screen - Isolate]
    [(4) Isolate]<--[(11) Microbiological Characterization]
    [(4) Isolate]<--[(12) 16S RRNA Analysis]
    ``` The illustration now also includes various additional entries: a library screen, then a streak plate, isolate screen, characterization, and 16S rRNA analysis of one isolate in that library

---
## TODO

!!! tip "Recommended: Review Entry Types Pages as Needed"
    This guide is kept lightweight so that you can contribute to science faster.

    You are not expected to be an expert on all thirteen database entry types before you begin -- And in a single class you almost certainly won't use them all!

    Instead, keep the [Entry Types](entries/index.md) portion of this guide handy and consult it as necessary.

`TODO paragraph telling them to plan ahead their research flow and possible database entries with their instructor`

As you've been working, you may have also noticed several green "Status : Saved" tags on each of your entries. So, next let's talk about the different statuses entries can have and how they fit into the flow of your Tiny Earth course!
