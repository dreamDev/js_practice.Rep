// Enum это такая сущность, которая позволяет лучше структурировать ваш код, если в нем присутствуют однотипные элементы.
enum Membership {
    Simple,
    Standard,
    Premium
}

const membership = Membership.Standard;
const membershipReverse = Membership[2];

console.log(membership) // 1
console.log(membershipReverse) // Premium

enum SocialMedia {
    VK = "VK",
    Facebook = "Facebook",
    Instagram = "Instagram"
}

const social = SocialMedia.Instagram;

console.log(social) // Instagram